package com.git.subscribeserver.subscribe;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubscribeController {
	
	private SubscribeService service;
	private SubscribeRepository subsRepo;
	
	@Autowired
	public SubscribeController(SubscribeService service, SubscribeRepository subsRepo) {
		this.service = service;
		this.subsRepo = subsRepo;
	}
	
	// 주문 추가
	@PostMapping("/subscribes")
	public Subscribe requestSubscribe(@RequestBody SubscribeRequest subsReq) {
		Subscribe savedSubscribe = service.saveSubscribe(subsReq);
		service.sendSubscribe(savedSubscribe);
		return savedSubscribe;
	}
	
	// 전체 조회
	@GetMapping("/subscribes")
	public List<Subscribe> getSubscribes() {
		return subsRepo.findAll();
	}
	
	// 주문 1건 조회
	@GetMapping("/subscribes/{id}")
	public Subscribe getSubscribe(@PathVariable long id) {
		System.out.println(id);
		return subsRepo.findById(id).orElse(null);
	}
	
}
