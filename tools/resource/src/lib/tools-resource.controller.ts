import {ToolsResourceService} from './tools-resource.service'
import {Body, Controller, Post} from '@nestjs/common'
import {
  CreateDomainDto,
  CreateDataSourceDto,
  CreateDataAccessDto,
  CreateResourceDto,
  CreateFeatureDto,
} from './dtos'

@Controller('tools')
export class ToolsResourceController {
  constructor(private readonly service: ToolsResourceService) {}

  @Post('domain')
  createDomain(@Body() createDomainDto: CreateDomainDto) {
    return this.service.createDomain(createDomainDto)
  }

  @Post('data-access')
  createDataAccess(@Body() createDataAccessDto: CreateDataAccessDto) {
    return this.service.createDataAccess(createDataAccessDto)
  }

  @Post('data-source')
  createDataSource(@Body() createDataSourceDto: CreateDataSourceDto) {
    return this.service.createDataSource(createDataSourceDto)
  }

  @Post('resource')
  createResource(@Body() createResourceDto: CreateResourceDto) {
    return this.service.createResource(createResourceDto)
  }

  @Post('feature')
  createFeature(@Body() createFeatureDto: CreateFeatureDto) {
    return this.service.createFeature(createFeatureDto)
  }
}
