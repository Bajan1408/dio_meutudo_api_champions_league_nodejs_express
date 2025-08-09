import { HttpResponse } from "../models/http-response"
import { PlayerModel } from "../models/player-model"

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: 'Registro criado com sucesso!'
        }
    }
}

export const deleted = async (): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: {
            msg: "Registro deletado com sucesso!"
        }
    }
}

export const updated = async (): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: {
            msg: "Registro atualizado com sucesso!"
        }
    }
}

