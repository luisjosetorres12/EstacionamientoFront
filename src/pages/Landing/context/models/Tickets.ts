export interface TicketModel {
    id: number,
    documentoUsuario: string,
    tipoVehiculo: number,
    idPlan: number,
    fechaIngreso: Date,
    fechaSalidaSugerida: Date,
    fechaSalida: Date,
    matricula: string
    total: string
}

export interface TicketParams {
    tipoVehiculo?: number,
    idPlan?: number,
    documentoUsuario?: string,
}