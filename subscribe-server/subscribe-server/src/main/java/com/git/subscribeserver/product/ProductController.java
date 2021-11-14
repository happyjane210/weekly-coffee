package com.git.subscribeserver.product;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

	private ProductRepository productRepo;
	
	@Autowired
	public ProductController(ProductRepository productRepo) {
		this.productRepo = productRepo;
	}
	
	// product 전체조회
	@GetMapping(value = "/products")
	public List<Product> getProducts() {
		
		
                
		return productRepo.findAll();
	}
	
	
}
