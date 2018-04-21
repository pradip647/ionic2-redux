export interface Friend {
    id: number,
    name:string,
    connected?:boolean
}

export interface Friend_List{
    friends:{},
    loading:boolean,
    error:string
}