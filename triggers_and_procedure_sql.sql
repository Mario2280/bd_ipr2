
-- SELECT с DISTINCT
-- Получить список уникальных городов, в которых зарегистрированы пользователи
SELECT DISTINCT city FROM User;

-- SELECT с ALL
-- Получить все сообщения, отправленные пользователем с ID 1
SELECT ALL content FROM Message WHERE senderId = 1;

-- SELECT с WHERE и HAVING
-- Получить количество пользователей в каждом городе, где количество пользователей больше 10
SELECT city, COUNT(*) as user_count FROM User GROUP BY city HAVING user_count > 10;

-- SELECT с GROUP BY и ORDER BY
-- Получить количество пользователей в каждом городе и отсортировать по убыванию
SELECT city, COUNT(*) as user_count FROM User GROUP BY city ORDER BY user_count DESC;

-- UNION
-- Получить список всех уникальных пользователей, которые либо отправили сообщение, либо получили сообщение
SELECT senderId as userId FROM Message
UNION
SELECT receiverId as userId FROM Message;

-- JOIN
-- Получить все сообщения и информацию о пользователях, которые их отправили
SELECT Message.content, User.firstName, User.lastName FROM Message
JOIN User ON Message.senderId = User.id;

-- Подзапросы
-- Получить пользователей, которые отправили более 10 сообщений
SELECT * FROM User WHERE id IN (SELECT senderId FROM Message GROUP BY senderId HAVING COUNT(*) > 10);

-- Подзапросы с ANY, IN, SOME, ALL
-- Получить пользователей, которые отправили хотя бы одно сообщение
SELECT * FROM User WHERE id IN (SELECT DISTINCT senderId FROM Message);

-- Подзапросы с [NOT] EXISTS
-- Получить пользователей, которые не отправляли сообщений
SELECT * FROM User WHERE NOT EXISTS (SELECT * FROM Message WHERE senderId = User.id);

-- Триггеры и хранимые процедуры
-- Создать триггер, который автоматически создает уведомление при отправке нового сообщения
DELIMITER //
CREATE TRIGGER new_message_notification AFTER INSERT ON Message
FOR EACH ROW
BEGIN
   INSERT INTO Notification(userId, type, content, notifiedAt) VALUES (NEW.receiverId, 'MESSAGE', CONCAT('You have a new message from ', NEW.senderId), NOW());
END; //
DELIMITER ;

-- Создать хранимую процедуру для блокировки пользователя
DELIMITER //
CREATE PROCEDURE BlockUser(IN blockerId INT, IN blockedId INT)
BEGIN
   INSERT INTO Block(blockerId, blockedId) VALUES (blockerId, blockedId);
END; //
DELIMITER ;


-- Получить все сообщения и информацию о пользователях, которые их отправили, используя USING
SELECT Message.content, User.firstName, User.lastName FROM Message
JOIN User USING (id);



DELIMITER //
CREATE FUNCTION haversine(lat1 FLOAT, lon1 FLOAT, lat2 FLOAT, lon2 FLOAT)
RETURNS FLOAT DETERMINISTIC
BEGIN
  DECLARE x FLOAT;
  DECLARE y FLOAT;
  DECLARE r FLOAT;
  SET r = 6371; -- радиус Земли в километрах
  SET x = RADIANS(lat2 - lat1);
  SET y = RADIANS(lon2 - lon1);
  RETURN r * 2 * ASIN(SQRT(
    POWER(SIN(x / 2), 2) +
    COS(RADIANS(lat1)) * COS(RADIANS(lat2)) *
    POWER(SIN(y / 2), 2)));
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE FindNearbyUsers(IN myLat FLOAT, IN myLon FLOAT, IN myCity VARCHAR(30), IN minAge INT, IN maxAge INT)
BEGIN
  -- Вычисляем текущий год для определения возраста
  SET @currentYear = YEAR(CURDATE());

  -- Выбираем пользователей, которые находятся в том же городе и удовлетворяют критериям возраста
  SELECT id, firstName, lastName, city, country, @currentYear - YEAR(birthDate) as age,
    haversine(myLat, myLon, X(location), Y(location)) as distance
  FROM User
  WHERE city = myCity AND @currentYear - YEAR(birthDate) BETWEEN minAge AND maxAge
  ORDER BY distance;
END//
DELIMITER ;