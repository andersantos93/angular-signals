import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description:
        'High-quality wireless headphones with noise cancellation and long battery life.',
      price: 100,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description:
        'Track your fitness goals with this advanced smart watch featuring heart rate monitoring.',
      price: 150,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact and powerful Bluetooth speaker perfect for outdoor adventures.',
      price: 200,
      originalPrice: 99.99,
    },
  ]);
}
