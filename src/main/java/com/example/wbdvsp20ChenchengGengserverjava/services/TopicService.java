package com.example.wbdvsp20ChenchengGengserverjava.services;

import com.example.wbdvsp20ChenchengGengserverjava.models.Topic;
import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import com.example.wbdvsp20ChenchengGengserverjava.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    TopicRepository topicRepository;

    public List<Topic> findAllTopics(){
        return (List<Topic>)topicRepository.findAll();
    }

    public Topic findTopicById(Integer tid){
        return topicRepository.findById(tid).get();
    }


    public Topic createTopic(String lid, Topic topic){
        topic.setLessonId(lid);
        return topicRepository.save(topic);
    }

    public List<Topic>findTopicsForLesson(String lid){
        return topicRepository.findTopicsForLesson(lid);
    }

    public int updateTopic(Integer tid,Topic topic){
        topicRepository.deleteById(tid);
        topicRepository.save(topic);
        return 1;
    }

    public int deleteTopic(Integer tid){
        topicRepository.deleteById(tid);
        return 1;
    }

}
