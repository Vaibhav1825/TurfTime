package com.app.entities;

public enum Slot {
	MORNING("06:00 AM", "9:00 AM"),
    MORNING1("9:00 AM", "12:00 PM"),
    AFTERNOON("12:00 PM", "3:00 PM"),
    EVENING("04:00 PM", "07:00 PM"),
    NIGHT("07:00 PM", "10:00 PM"),
    NIGHT1("10:00 PM", "1:00 AM");

    private final String startTime;
    private final String endTime;

    Slot(String startTime, String endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    @Override
    public String toString() {
        return this.name() + " (" + startTime + " - " + endTime + ")";
    }

}
