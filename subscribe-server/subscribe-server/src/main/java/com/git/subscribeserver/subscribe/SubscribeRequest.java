package com.git.subscribeserver.subscribe;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubscribeRequest {
	
	private long subscribeId;
    private long partnerId;

    private int subscriberId;
    private String subscriberName;
    private String subscriberPhone;
    private String location;
    private String deliveryMemo;
    private List<SubscribeDetail> subscribeDetails;
    
    @Data
    @NoArgsConstructor
    public static class SubscribeDetail {
        private int beanAmount;
        private int term;
        private String groundPoint;
        private int orderQuantity;
        private int productPrice;

        private long productId;
        private String productImageUrl;
        private String productName;
        
        private long partnerId;
        private String companyName;
    }
	
}
