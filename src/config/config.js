import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import { __dirname } from '../path.js';

//SWAGGER CONFIGURATION
const swaggerOptions = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Exactus Store - API Docs',
            description: 'Documentacion Oficial de Exactus Store',
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}

export const specs = swaggerJsdoc(swaggerOptions)