package com.git.subscribeserver.subscribe;

import com.git.subscribeserver.subscribe.subscribeDetail.SubscribeDetail;

import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Subscribe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long subscribeId;
    private long partnerId;

    private String subscribeDate;
    private int subscriberId;
    private String subscriberName;
    private String subscriberPhone;
    private String location;
    private String deliveryMemo;
    private int totalPayment;


    @OneToMany //단방향 <- List<subscribeDetail>
    @JoinColumn(name = "subscribeId")
    private List<SubscribeDetail> details;

}
