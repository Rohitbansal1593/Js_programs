console.log("constructor.js")
function college(id,name) {
    this.id=id,
    this.name=name,
    this.detail=function() {
        console.log(`${this.id} id is from ${this.name} college`);    
    }
    
}
let entry1=new college("Pgi17","poornima");
let entry2=new college("jecc17","Jecrc");