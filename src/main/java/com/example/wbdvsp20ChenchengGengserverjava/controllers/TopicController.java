package com.example.wbdvsp20ChenchengGengserverjava.controllers;

import com.example.wbdvsp20ChenchengGengserverjava.models.Topic;
import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import com.example.wbdvsp20ChenchengGengserverjava.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TopicController {
    @Autowired
    TopicService topicService;

    @GetMapping("/api/topics")
    public List<Topic> findAllTopics(){
        return topicService.findAllTopics();
    }

    @PostMapping("/api/lessons/{lid}/topics")
    public Topic createTopic (@PathVariable("lid") String lid, @RequestBody Topic topic){
        return topicService.createTopic(lid, topic);
    }

    @GetMapping("/api/lessons/{lid}/topics")
    public List<Topic> findTopicsForLesson(@PathVariable("lid") String lid){
        return topicService.findTopicsForLesson(lid);
    }

    @PutMapping("/api/topics/{tid}")
    public int updateTopic(@PathVariable("tid") Integer tid, @RequestBody Topic topic){
        return topicService.updateTopic(tid,topic);
    }

    @DeleteMapping("/api/topics/{tid}")
    public int deleteTopic(@PathVariable("tid") Integer tid){
        return topicService.deleteTopic(tid);
    }

    @GetMapping("/api/topics/{tid}")
    public Topic findTopicById(@PathVariable("tid") Integer tid){
        return topicService.findTopicById(tid);
    }

}
