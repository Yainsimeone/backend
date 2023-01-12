class productManager{
    constructor(){
        this.product = []
    }ld
    getProducts = ()=> this.product
    getProductById = (id) => {
        const productXX = this.product.find(product =>product.id === id)
        if (productXX) {
            return `no exite con id: ${id}`
        }
        return productXX
    }
    addproduct = (newItem) => {
        const productXX = this.product.find(product => product.code === newItem.code)
        if (productXX) {
            return `esta el product`
        }
        if(newItem.title === ''){
            return `llenar bien los campos`
        }
        if (this.product.length === 0){
            newItem.id = 1
            this.product.push(newItem)
        }else{
            this.product = [...this.product,{...newItem, id: this.product[this.product.length-1].id + 1}]
        }
    }
    
}

const productos = new productManager()

console.log(productos.addproduct({
    title: 'producto prueba',
    description:'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code: 'abc123',
    stock:25,
}))

console.log(productos.addproduct({
    title: '',
    description:'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code: 'abc123',
    stock:25,

}))

console.log(productos.getproduct())
console.log(productos.getProductById(4))
