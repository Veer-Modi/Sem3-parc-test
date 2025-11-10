class Box {
    double length;
    double width;
    double height;

    Box() {
        length = width = height = 1;
    }

    Box(double side) {
        length = width = height = side;
    }

    Box(double l, double w, double h) {
        length = l;
        width = w;
        height = h;
    }

    double volume() {
        return length * width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Box b1 = new Box();
        System.out.println("Volume with no args: " + b1.volume());

        Box b2 = new Box(3);
        System.out.println("Volume with 1 args: " + b2.volume());

        Box b3 = new Box(2, 4, 6);
        System.out.println("Volume with parameterized args: " + b3.volume());
    }
}