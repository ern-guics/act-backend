import bcrypt from "bcrypt";
import { IEncrypter } from "./types";

class Encrypter implements IEncrypter{
    
    encrypt(value: string): string{
        if(value != undefined){

            let valorCriptografado = bcrypt.encrypt(value)
            return valorCriptografado;
        }
        return ""
    }

    compare(valueToCompare: string, originalEncripted: string): boolean{

        if(valueToCompare === originalEncripted){
            return true;
        }
        
        return false;
    }
}