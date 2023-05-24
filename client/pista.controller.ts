import {  Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PistaService } from './pista.service';
import { PistaEntity } from './pista.entity/pista.entity';

@Controller('api/pista')
export class PistaController {

    constructor(private readonly pistaService : PistaService){}

    @Get('pistas')
    getPistas():any{
        return this.pistaService.getPistas();
    }

    @Post('crear')
    crearPista(@Body() body:PistaEntity):any{
        return this.pistaService.addPista(body);
    }

    @Delete('eliminar/:id')
    eliminarPista(@Param('id')id : any) :any{
        return this.pistaService.delete(id);
    }




}