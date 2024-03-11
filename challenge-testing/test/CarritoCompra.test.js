const CarritoCompra = require('../index');

// ? Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

// ? constructor(): Inicializa el carrito como un array vacío.

// ? agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// ? calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// ? aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

// ? Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

describe('Clase CarritoCompra', () => {
    let carritoCompra;
    beforeEach(() => {
        carritoCompra = new CarritoCompra();  
    });
    describe('Constructor de la clase CarritoCompra', () => {
        it('CarritoCompra deberia ser una clase', () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function');
        });

        it('CarritoCompra deberia ser una instancia de la clase CarritoCompra', () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });

        it('Debria guardar productos en una lista', () => {
            expect(carritoCompra.products).toEqual([]);
        });


    })

    describe('Metodos de la clase CarritoCompra', () => {
        const product1 = {
            id: 1,
            name: 'Lapizero Azul',
            price: 1000,
            quantity: 3
        };
        
        const product2 = {
            id: 2,
            name: 'Lapizero Negro',
            price: 900,
            quantity: 5
        };

        it('Deberia tener un metodo llamado agregarProducto', () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function');
        });

        it('Deberia tener un metodo llamado calcularTotal', () => {
            expect( typeof carritoCompra.calcularTotal).toBe('function');
        });

        it('Deberia tener un metodo llamado aplicarDescuento', () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function');
        });

        it('Deberia poder agregar un producto a la lista', () => {
            carritoCompra.agregarProducto(product1);
            expect(carritoCompra.products).toContain(product1);
        });

        it('El metodo calcularTotal deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito', () => {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);

            const totalExpect = product1.price * product1.quantity + product2.price * product2.quantity;
            const total = carritoCompra.calcularTotal();

            expect(total).toBe(totalExpect);
        });

        it('Deberia aplicarl el descuento', () => {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);

            const subTotal = product1.price * product1.quantity + product2.price * product2.quantity;
            const porcentaje = 15;

            const totalExpect = subTotal - (subTotal * (porcentaje /100));

            const result = carritoCompra.aplicarDescuento(porcentaje);

            expect(totalExpect).toBe(result);
        });
    });
});