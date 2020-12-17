import  {Request, Response} from 'express';
import BookService from '../services/BookService';


export default class BookController{
    
    private book_service: BookService = new BookService();
    
    public createBook(req: Request, res: Response) {

        this.book_service.createBook(req).then(result=>{
            res.send(result);
        });
    }

    public getAllBooks(req: Request, res: Response) {
        this.book_service.getAllBooks(req,res).then(result=>{
            res.send(result);
        });
    }

    // public updateBook(req:Request,res:Response){
    //     this.book_service.updateBook(req).then(result=>{
    //         res.status(200).send({
    //             message : result
    //         });
    //     });
    // }

    // public deleteBook(req: Request, res: Response){
    //     this.book_service.deleteBook(req).then(result=>{
    //         res.status(200).send({
    //             message:result
    //         });
    //     });
    // }
    
}