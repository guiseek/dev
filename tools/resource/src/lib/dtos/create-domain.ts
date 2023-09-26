import {CreateLayerDto} from './create-layer'
import {ApiProperty} from '@nestjs/swagger'

export class CreateDomainDto extends CreateLayerDto {
  @ApiProperty({
    required: true,
    default: 'tsc',
    isArray: false,
  })
  bundler: 'swc' | 'tsc' | 'rollup' | 'vite' | 'esbuild' | 'none'

  @ApiProperty({
    required: false,
    default: 'as-provided',
  })
  projectNameAndRootFormat?: 'as-provided' | 'derived'

  @ApiProperty({
    required: false,
    default: 'jsdom',
  })
  testEnvironment?: 'jsdom' | 'node'

  @ApiProperty({
    required: false,
    default: false,
    type: Boolean,
  })
  minimal?: boolean
}
