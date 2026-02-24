export type UserId = string;

export interface Chat {
    id: string;
    userId: string;
    name: string;
    message: string;
    upovotes: UserId[]; // who has upvoted for what.


}

export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) {

    }

    getChats(room: string, limit: number, offset: number) {

    }

    addChat(userId: UserId, name: string , room: string , message: string) {

    }

    upvote(userId: UserId , room: string, chatId: string){

    }

}