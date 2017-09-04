declare module 'typings' {
    namespace Model {
        interface Car {
            id ?: number
            make : string
            model : string
            year : number
            created_at ?: Date
            updated_at ?: Date
        }
    }
}
