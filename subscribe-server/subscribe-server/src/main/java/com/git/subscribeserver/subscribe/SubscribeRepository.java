package com.git.subscribeserver.subscribe;


import org.springframework.data.jpa.repository.JpaRepository;


public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {

	//List<Subscribe> findBySubscriberId();
}
