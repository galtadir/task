import React from 'react'
import uml from './Q4.png';

export const Q4 = () => {
    return (
        <div>
            <h1>Q4</h1>
            <img src={uml}  alt="" height="1300" width="1300"/>
            
        </div>
    )
}



const armchairs = {
     ArtDecos : [],
     Victorian : [],
     Modern:[]
}
const sofas = {
     ArtDecos : [],
     Victorian : [],
     Modern:[]
}
const tables = {
     ArtDecos : [],
     Victorian : [],
     Modern:[]
}

class Product{
    constructor(affiliates1, affiliate2) {
        if (this.constructor === Product ||this.constructor === Armchair || this.constructor === Sofa || this.constructor === Table) {
            throw new TypeError('Abstract class cannot be instantiated directly.'); 
        }
        this.affiliates1 = affiliates1
        this.affiliate2 = affiliate2
    }
}

class Armchair extends Product{
    constructor(affiliates1, affiliate2) {
        super(affiliates1,affiliate2)
    }
}

class ArtDecoArmchair extends Armchair{
    constructor() {
        super(sofas["ArtDecos"],tables["ArtDecos"])
        armchairs["ArtDecos"].push(this)
    }
}

class VictorianArmchair extends Armchair{
    constructor() {
        super(sofas["Victorian"],tables["Victorian"])
        armchairs["Victorian"].push(this)
    }
}

class ModernArmchair extends Armchair{
    constructor(affiliates1, affiliate2) {
        super(sofas["Modern"],tables["Modern"])
        armchairs["Modern"].push(this)
    }
}

class Sofa extends Product{
    constructor(affiliates1, affiliate2) {
        super(affiliates1,affiliate2)
    }
}

class ArtDecosSofa extends Sofa{
    constructor() {
        super(armchairs["ArtDecos"],tables["ArtDecos"])
        sofas["ArtDecos"].push(this)
    }
}

class VictorianSofa extends Sofa{
    constructor() {
        super(armchairs["Victorian"],tables["Victorian"])
        sofas["Victorian"].push(this)
    }
}

class ModernSofa extends Sofa{
    constructor(affiliates1, affiliate2) {
        super(armchairs["Modern"],tables["Modern"])
        sofas["Modern"].push(this)
    }
}

class Table extends Product{
    constructor(affiliates1, affiliate2) {
        super(affiliates1,affiliate2)
    }

}

class ArtDecosTable extends Table{
    constructor() {
        super(armchairs["ArtDecos"],sofas["ArtDecos"])
        tables["ArtDecos"].push(this)
    }
}

class VictorianTable extends Table{
    constructor() {
        super(armchairs["Victorian"],sofas["Victorian"])
        tables["Victorian"].push(this)
    }
}

class ModernTable extends Table{
    constructor(affiliates1, affiliate2) {
        super(armchairs["Modern"],sofas["Modern"])
        tables["Modern"].push(this)
    }
}







