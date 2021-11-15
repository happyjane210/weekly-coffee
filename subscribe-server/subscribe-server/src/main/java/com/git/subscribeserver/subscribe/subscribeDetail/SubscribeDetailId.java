package com.git.subscribeserver.subscribe.subscribeDetail;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscribeDetailId implements Serializable {

	private static final long serialVersionUID = 4115897150946242178L;
	
	private long subscribeId;
	private int seq;
}
