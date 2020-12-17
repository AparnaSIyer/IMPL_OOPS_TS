import { json } from 'body-parser';
import  {Request, Response} from 'express';
import { stringify } from 'querystring';
import {Book} from '../models/book';

export default class BookService{
    
    public createBook = async (req:Request) =>{
       let book=new Book(req.body);
       try{
            await book.save()
            .then((result)=>{ return result})
            .catch((err:Error)=>{return err});
        }
        catch(ex){
            throw new Error(ex);
        }
   
        return book
    }

    public getAllBooks = async(req:Request, res: Response)=>{
       return await Book.findAll<Book>({})
       .then((books:Array<Book>)=>{ return books})
       .catch((err: Error) => res.status(500).json(err));
    }

    public updateBook = async (req:Request) => {
        try{
            return await Book.update({req.body}, {where:req.params.id})
            .then((result)=>{
                if(!result){
                    return {};
                }
                else{
                    return Book.find({_id:req.params.id}).then((result)=>{
                        return result
                    })
                }
            });
        }
        catch(ex){
                throw new Error(ex);
        }

    }

    // public deleteBook = async (req:Request) => {
    //     try{
    //         return await Book.findOneAndDelete({_id:req.params.id})
    //         .then((result)=>{
    //             if(!result){
    //                 return {};
    //             }
    //             else{
    //                 let res="Deleted"
    //                 return res;
    //             }
    //         });
    //     }
    //     catch(ex){
    //         if (ex.response_code === undefined || ex.response_code === null)
    //             console.log(ex);
    //         throw ex;
    //     }
    // }

  
}