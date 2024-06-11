package com.sergioneto;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class Concatenate {

    public static void main(String[] args) {

        if (args.length < 2) {
            System.out.println("You need to provide 2 lists as arguments. You provided " + args.length);
            throw new UnsupportedOperationException("You need to provide 2 lists as arguments");
        }

        List<Integer> firstSeries = List.of(args[0].split(",")).stream()
                .map(Integer::valueOf).collect(Collectors.toList());

        List<Integer> secondSeries = List.of(args[1].split(",")).stream()
                .map(Integer::valueOf).collect(Collectors.toList());

        List<Integer> elements = extractCommonElements(firstSeries, secondSeries);
        System.out.println(elements);

    }

    public static List<Integer> extractCommonElements(List<Integer> list1, List<Integer> list2) {
        Set<Integer> intersection = new HashSet<>(list1);

        intersection.retainAll(list2);
        if (list1.getFirst().equals(list2.getFirst())) {
            intersection.add(list1.getFirst());
        }
        if (list1.getLast().equals(list2.getLast())) {
            intersection.add(list1.getLast());
        }

        return intersection.stream().toList();
    }
}
