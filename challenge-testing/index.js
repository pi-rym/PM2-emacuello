class CarritoCompra {
    constructor () {
        this.products = []
    }

    agregarProducto(products) {
        this.products.push(products)
    };
    calcularTotal(){
        let total = 0;

        for(const item of this.products) {
            total += item.price * item.quantity
        }
        return total
    };
    aplicarDescuento(porcentaje){
        const subTotal = this.calcularTotal();

        const descuento = this.calcularTotal() * (porcentaje/100)

        return subTotal - descuento;

    };
}

module.exports = CarritoCompra;