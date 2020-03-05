package com.example.wbdvsp20ChenchengGengserverjava.services;


import com.example.wbdvsp20ChenchengGengserverjava.models.Topic;
import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import com.example.wbdvsp20ChenchengGengserverjava.repositories.TopicRepository;
import com.example.wbdvsp20ChenchengGengserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    TopicRepository topicRepository;

    public List<Widget> findAllWidgets() {
        return (List<Widget>)widgetRepository.findAll();
    }

    public Widget findWidgetById(Integer wid){
        return widgetRepository.findById(wid).get();
    }


    public Widget createWidget(Integer topicId, Widget widget){
        Topic topic = topicRepository.findById(topicId).get();
        widget.setTopic(topic);
        return widgetRepository.save(widget);
    }

    public List<Widget>findWidgetsForTopic(Integer tid){
        return widgetRepository.findWidgetsForTopic(tid);
    }

    public int updateWidget(Integer wid,Widget widget){
        widgetRepository.deleteById(wid);
        widgetRepository.save(widget);
        return 1;
    }

    public int deleteWidget(Integer wid){
        widgetRepository.deleteById(wid);
        return 1;
    }

}
