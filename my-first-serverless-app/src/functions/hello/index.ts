import { ScheduledHandler } from 'aws-lambda';
import AWS from 'aws-sdk';

export const scrapeAndInsertData: ScheduledHandler = async (event) => {
    try {
        console.log('Executando script de scraping e inserção de dados no DynamoDB...');
        
        // Configuração do cliente DynamoDB
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        
        // Parâmetros para inserção de dados na tabela
        const params = {
            TableName: 'NomeDaTabela',
            Item: {
                id: '1', // Substitua '1' pelo ID adequado do produto
                nome: 'Produto 1', // Substitua 'Produto 1' pelo nome do produto
                preco: 100.00 // Substitua 100.00 pelo preço do produto
            }
        };
        
        // Inserção de dados no DynamoDB
        await dynamodb.put(params).promise();

        console.log('Dados inseridos com sucesso no DynamoDB.');
        
        return {
            statusCode: 200,
            body: 'Dados inseridos com sucesso no DynamoDB.'
        };
    } catch (error) {
        console.error('Erro ao executar o script de scraping e inserção de dados:', error);
        return {
            statusCode: 500,
            body: 'Erro ao executar o script de scraping e inserção de dados.'
        };
    }
};
