# rtd-showcase
Resistance thermometer are sensors used to measure temperature by 
correlating the resistance of the RTD element with temperature. 
This software implements a large amount of the various profiles 
needed to perform computation on these sensors.

# Usage


## Case 1
1. Select sensor from the dropdown
2. Input either temperature (in Celsius) or resistance (in Ohm), resolve the other value.

## Case 2
1. Switch the dropdown to "Resolve RTD" to use temperature and resistance to resolve an appropriate sensor.



# Computing Steinhart Haart Parameters

```shell
pi@delta ~ $ gnuplot
Terminal type set to 'wxt'
gnuplot> c(x) = A + B*x + C*x**2 + D*x**3
gnuplot> fit c(x) "thermistor.txt" using (log($2)):(1.0/(273.15+$1)) via A,B,C,D
...
Final set of parameters            Asymptotic Standard Error
=======================            ==========================

A               = 0.00116597       +/- 1.838e-06    (0.1576%)
B               = 0.000220635      +/- 7.053e-07    (0.3197%)
C               = 1.81284e-06      +/- 8.904e-08    (4.912%)
D               = 2.73396e-09      +/- 3.699e-09    (135.3%)
...
gnuplot> plot "thermistor.txt" using (log($2)):(1.0/(273.15+$1)), c(x)
```
