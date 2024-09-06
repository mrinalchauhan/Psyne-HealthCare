"use client";
import React from 'react';
import ProductCard from "@/app/components/ProductCard";
import ProductInfo from "@/app/components/ProdInfo";

const Products = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-12">
            <ProductInfo />
            <ProductCard />
        </div>
    );
}

export default Products;
