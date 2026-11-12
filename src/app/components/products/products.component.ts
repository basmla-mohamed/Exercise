import { Component, computed, signal } from '@angular/core';

type Product = {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  quantity: number;
  img: string;
  description: string;
};

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.component.scss',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'AirPods',
      oldPrice: 3500,
      newPrice: 2500,
      quantity: 0,
      img: '1.jfif',
      description:
        'Enjoy high-quality sound with wireless connectivity and active noise cancellation.',
    },
    {
      id: 2,
      name: 'Headphones',
      oldPrice: 2500,
      newPrice: 1800,
      quantity: 0,
      img: '2.jfif',
      description: 'Comfortable wireless headphones with powerful bass and long battery life.',
    },
    {
      id: 3,
      name: 'Microphone',
      oldPrice: 1600,
      newPrice: 1200,
      quantity: 0,
      img: '3.jfif',
      description:
        'A professional microphone that delivers clear audio for streaming, gaming, and recording.',
    },
    {
      id: 4,
      name: 'Keyboard',
      oldPrice: 2000,
      newPrice: 1500,
      quantity: 0,
      img: '4.jfif',
      description: 'A responsive mechanical keyboard designed for comfortable typing and gaming.',
    },
    {
      id: 5,
      name: 'Smart Device',
      oldPrice: 4000,
      newPrice: 3000,
      quantity: 0,
      img: '5.jfif',
      description: 'A smart electronic device with modern features to make everyday tasks easier.',
    },
    {
      id: 6,
      name: 'Laptop',
      oldPrice: 30000,
      newPrice: 25000,
      quantity: 0,
      img: '6.jfif',
      description: 'A powerful laptop built for gaming, multitasking, and demanding applications.',
    },
    {
      id: 7,
      name: 'iPhone',
      oldPrice: 30000,
      newPrice: 25000,
      quantity: 0,
      img: '7.jfif',
      description:
        'Experience premium performance, stunning photography, and a smooth user experience.',
    },
    {
      id: 8,
      name: 'Gaming Controller',
      oldPrice: 3200,
      newPrice: 2500,
      quantity: 0,
      img: '8.jfif',
      description:
        'Enjoy precise controls and comfortable gameplay with this wireless gaming controller.',
    },
  ]);

  // Total quantity
  totalItems = computed(() => {
    return this.products().reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  });

  // Total price
  totalPrice = computed(() => {
    return this.products().reduce((total, item) => {
      return total + item.quantity * item.newPrice;
    }, 0);
  });

  // Add to cart
  addToCart(id: number) {
    this.products.update((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  }

  // Remove from cart
  removeFromCart(id: number) {
    this.products.update((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: 0 } : item)),
    );
  }
}
