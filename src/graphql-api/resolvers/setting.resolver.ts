import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import {
  AffectedRows,
  Setting,
  FindFirstSettingArgs,
  FindUniqueSettingArgs,
  AggregateSetting,
  CreateOneSettingArgs,
  DeleteManySettingArgs,
  DeleteOneSettingArgs,
  FindManySettingArgs,
  UpdateOneSettingArgs,
  SettingAggregateArgs,
  SettingGroupByArgs,
  SettingGroupBy,
} from '../../dtos/index'
import { SettingService } from '../../shared/services/setting.service'

@Resolver(() => Setting)
export class SettingResolver {
  constructor(private readonly settingService: SettingService) {}

  @Query(() => Setting, { nullable: false })
  findFirstSetting(@Args() args: FindFirstSettingArgs) {
    this.settingService.findFirst(args)
  }

  @Query(() => Setting, { nullable: false })
  findUniqueSetting(@Args() args: FindUniqueSettingArgs) {
    return this.settingService.findUnique(args)
  }

  @Query(() => [Setting], { nullable: false })
  listsSetting(@Args() args: FindManySettingArgs) {
    return this.settingService.findMany(args)
  }

  @Query(() => [SettingGroupBy], { nullable: false })
  groupBySetting(@Args() args: SettingGroupByArgs) {
    return this.settingService.groupBy(args)
  }

  @Query(() => AggregateSetting, { nullable: false })
  aggregateSetting(@Args() args: SettingAggregateArgs) {
    return this.settingService.aggregate(args)
  }

  @Mutation(() => Setting, { nullable: true })
  createSetting(@Args() args: CreateOneSettingArgs) {
    return this.settingService.create(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManySetting() {
    return this.settingService.createMany()
  }

  @Mutation(() => Setting, { nullable: true })
  updateSetting(@Args() args: UpdateOneSettingArgs) {
    return this.settingService.update(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManySetting() {
    return this.settingService.updateMany()
  }

  @Mutation(() => Setting, { nullable: true })
  deleteSetting(@Args() args: DeleteOneSettingArgs) {
    return this.settingService.delete(args)
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManySetting(@Args() args: DeleteManySettingArgs) {
    return this.settingService.deleteMany(args)
  }
}
