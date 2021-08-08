import { PlatformTypes } from '../platform-types'

export namespace Budget {
    export type Category = {
        name: string
        id: string
        modified: PlatformTypes.DeconstructedDateTime
        created: PlatformTypes.DeconstructedDateTime
        order: number
        hidden: boolean
        active: boolean
        categoryCount: 0
    }

    export type Envelope = {
        name: string
        categoryId: string
        modified: PlatformTypes.DeconstructedDateTime
        created: PlatformTypes.DeconstructedDateTime
        hidden: boolean
        active: boolean
        allocatedAmount: number
        order: number
    }
}
