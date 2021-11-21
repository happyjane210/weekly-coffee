package com.git.subscribeserver.product;

import java.util.Optional;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

	private ProductRepository productRepo;
	
	@Autowired
	public ProductService(ProductRepository productRepo) {
		this.productRepo = productRepo;
	} 
	
	@RabbitListener(queues = "partner.product.send")
	public void receiveProducts(ProductResponse productRes) {
		System.out.println("제품 정보 들어옴" + productRes);
		Product product = Product.builder().productId(productRes.getProductId())
                .partnerId(productRes.getPartnerId())
                .productName(productRes.getProductName())
                .productUploadDate(productRes.getProductUploadDate())
                .productPrice(productRes.getProductPrice())
                .productImageUrl(productRes.getProductImageUrl())
                .productInfo(productRes.getProductInfo())
                .fileName(productRes.getFileName())
                .fileType(productRes.getFileType())
                .salesStatus(productRes.getSalesStatus())
                .foodType(productRes.getFoodType())
                .expirationData(productRes.getExpirationData())
                .manufacturer(productRes.getManufacturer())
                .manufacturingDate(productRes.getManufacturingDate())
                .companyName(productRes.getCompanyName())
                .companyIntroduce(productRes.getCompanyIntroduce())
                .companyAddress(productRes.getCompanyAddress())
                .companyContact(productRes.getCompanyContact())
                .beanType(productRes.getBeanType())
                .beanTag(productRes.getBeanTag())
                .processing(productRes.getProcessing())
                .country(productRes.getCountry())
                .region(productRes.getRegion())
                .farm(productRes.getFarm())
                .cupNote(productRes.getCupNote())
                .roastingPoint(productRes.getRoastingPoint())
                .variety(productRes.getVariety()).build();
		
		productRepo.save(product);
		System.out.println("제품정보 저장" + product);	
	}
	
	@RabbitListener(queues = "partner.productSales.send")
	public void receiveProductSales(ProductSalesResponse salesRes) {
		System.out.println("sales status 바뀜 " + salesRes);
		
		// 이걸 가지고 찾음
		Optional<Product> productOptional = productRepo.findById(salesRes.getProductId());
		
		// product에 담음
		Product product = productOptional.get();
		product.setSalesStatus(salesRes.getSalesStatus());
		
		productRepo.save(product);
	}
	
	@RabbitListener(queues = "partner.removeProduct.send")
	public void receiveProductRemove(long productId) {
		System.out.println("product 지움" + productId);
		
		productRepo.deleteById(productId);
	}
	
	@RabbitListener(queues = "partner.semiModify.send")
	public void receiveProductModify(Product productRes) {
		System.out.println("product 수정" + productRes);
		
		// 이걸 가지고 찾음
		productRepo.save(productRes);
		
	}
	
}
