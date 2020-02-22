package com.example.wbdvsp20ChenchengGengserverjava.services;


import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


public class WidgetService {
    List<Widget> widgetList = new ArrayList<Widget>();

    public Widget createWidget(String tid,Widget widget){
        widget.setTopicId(tid);
        widget.setId(new Date().getTime()+"");
        widgetList.add(widget);
        return widget;
    }

    public List<Widget>findWidgetsForTopic(String tid){
        List<Widget> results = new ArrayList<Widget>();
        for(Widget w: widgetList) {
            if(w.getTopicId().equals(tid)) {
                results.add(w);
            }
        }
        return results;
    }

    public int updateWidget(String wid,Widget widget){
        for(int i=0; i<widgetList.size(); i++) {
            if(widgetList.get(i).getId().equals(wid)) {
                widgetList.set(i, widget);
                return 1;
            }
        }
        return 0;
    }

    public int deleteWidget(String wid){
        widgetList = widgetList.stream()
                .filter(w -> !w.getId().equals(wid)).collect(Collectors.toList());
        return 1;
    }

}
