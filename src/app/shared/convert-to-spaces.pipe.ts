import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'removeSpace'
  })
export class RemoveSpacePipe implements PipeTransform{
    transform(value:string, character: string):string{
     return value.replace(character,' ');
    }
  }