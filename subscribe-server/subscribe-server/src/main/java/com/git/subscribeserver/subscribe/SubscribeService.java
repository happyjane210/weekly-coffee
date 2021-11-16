package com.git.subscribeserver.subscribe;

import com.git.subscribeserver.subscribe.SubscribeRequest;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.git.subscribeserver.subscribe.subscribeDetail.SubscribeDetail;
import com.git.subscribeserver.subscribe.subscribeDetail.SubscribeDetailRepository;

@Service
public class SubscribeService {
	
	private SubscribeRepository subsRepo;
	private SubscribeDetailRepository detailRepo;
	
	private RabbitTemplate rabbit;
	
	@Autowired
	public SubscribeService(SubscribeRepository subsRepo, SubscribeDetailRepository detailRepo, RabbitTemplate rabbit) {
		this.subsRepo = subsRepo;
		this.detailRepo = detailRepo;
		this.rabbit = rabbit;
	}
	
	@Transactional(rollbackOn = Exception.class)
	public Subscribe saveSubscribe(SubscribeRequest subsReq ) {
		
		// 요청객체 -> entity 객체로 변환 - 내 DB에 저장
		Subscribe toSaveSubs = Subscribe.builder()
				.partnerId(subsReq.getPartnerId())
				.subscribeDate(subsReq.getSubscribeDate())
				.subscriberId(subsReq.getSubscriberId())
				.subscriberName(subsReq.getSubscriberName())
				.subscriberPhone(subsReq.getSubscriberPhone())
				.location(subsReq.getLocation())
				.deliveryMemo(subsReq.getDeliveryMemo())
				.totalPayment(subsReq.getTotalPayment())
				.build();
		
		// 주문 정보 저장
		Subscribe savedSubscribe = subsRepo.save(toSaveSubs);
		
		// 주문 상세정보 id 설정
		List<SubscribeDetail> toSaveDetails = new ArrayList<SubscribeDetail>();
		// detail 배열 생성 반복문
		for(SubscribeRequest.SubscribeDetail detailReq : subsReq.getSubscribeDetails()) {
			SubscribeDetail detail = SubscribeDetail.builder()
					.subscribeId(savedSubscribe.getSubscribeId())
					.seq(subsReq.getSubscribeDetails().indexOf(detailReq) + 1)
					.beanAmount(detailReq.getBeanAmount())
					.term(detailReq.getTerm())
					.groundPoint(detailReq.getGroundPoint())
					.orderQuantity(detailReq.getOrderQuantity())
					.productPrice(detailReq.getProductPrice())
					.productId(detailReq.getProductId())
					.productImageUrl(detailReq.getProductImageUrl())
					.productName(detailReq.getProductName())
					.partnerId(detailReq.getPartnerId())
					.companyName(detailReq.getCompanyName())
					.build();
			
			toSaveDetails.add(detail);
		}
		
		// 주문 상세정보 저장
		List<SubscribeDetail> savedSubscribeDetails = detailRepo.saveAll(toSaveDetails);
		
		savedSubscribe.setSubscribeDetails(savedSubscribeDetails);
		
		
		return savedSubscribe;
	}
	
	public void sendSubscribe(Subscribe subscirbe) {
		rabbit.convertAndSend("subscriber.subscribe.send", subscirbe);
	}
	
			
			
			
			
			

}
