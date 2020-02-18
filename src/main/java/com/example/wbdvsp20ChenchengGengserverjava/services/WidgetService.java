package com.example.wbdvsp20ChenchengGengserverjava.services;


import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WidgetService {
    List<Widget> widgetList = new ArrayList<Widget>();

    {
        Widget a1 = new Widget("widget 1","heading","111");
        Widget a2 = new Widget("widget 2","paragraph","111");
        Widget a3 = new Widget("widget 3","heading","222");
        widgetList.add(a1);
        widgetList.add(a2);
        widgetList.add(a3);
    }
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
