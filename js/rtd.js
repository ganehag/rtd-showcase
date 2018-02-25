var RTD = function () {
    this.ABS_ZERO = -273.15;
    this.DIALOG_CANDIDATES = 1;
    this.SENSOR_LIST = {
		"575at20": {
		    input: {
		        coeffs: [-6.042293174107087e-13, 2.516117069868201e-9, -4487399140366781e-21, 0.004443115765475248, -2.637701184400941, 938.864215506447, -185520.6893594392, 15699711.82204469]
		    },
		    output: {
		        coeffs: [-2.89061226280799e-8, 265946238848935e-20, 0.00021688847727239, -0.0174626783622603, -2.11934261299831, 623.164763696721]
		    }
		},
		"drt_3453": {
		    input: {
		        coeffs: [6.60343612e-35, -3.54235184e-30, 8.19851042e-26, -1.0724537e-21, 8.72763502e-18, -4.5860029e-14, 1.56534808e-10, -3.41468386e-7, 0.000459842952, -0.373588385, 223.126116]
		    },
		    output: {
		        coeffs: [-8.98115351e-18, 7.69872546e-15, -2.49968738e-12, 3.46436622e-10, -7.42620698e-09, -2.94309499e-06, 1.90224882e-04,   1.28943863e-02,  -9.22590234e-01, -9.21091674e+01, 7.65964881e+03]
		    }
		},
		"ni1000_din": {
		    input: {
		        coeffs: [-1.75408614226555e-11, 8.84491806368604e-8, -0.000200364535489264, 0.387857392956849, -258.401236761198]
		    },
		    output: {
		        coeffs: [-2e-14, 0, 2.805e-8, 0, 0.00665, 5.485, 1e3]
		    }
		},
		"ni1000_lg": {
		    input: {
		        coeffs: [-3.06109783674606e-11, 1.48268628299125e-7, -0.000320371669386914, 0.544080975558465, -341.35928564712]
		    },
		    output: {
		        coeffs: [4.82471301311568e-8, 291520583784031e-20, 0.00511464785655262, 4.42993373387188, 999.974586079649]
		    }
		},
		"ni100_din": {
		    input: {
		        coeffs: [-3.86602154774982e-7, 0.000173566410455356, -0.0328518264402307, 4.73425670319267, -279.816223964632]
		    },
		    output: {
		        coeffs: [2e-15, 0, 2.805e-9, 0, 665e-6, 0.5481, 100]
		    }
		},
		"ni120_din": {
		    input: {
		        coeffs: [783717867819134e-20, -0.00551417562365828, 2.40211212781468, -222.393396587447]
		    },
		    output: {
		        coeffs: [5.652e-7, 94464e-8, 0.7056, 120]
		    }
		},
		"ni500_din": {
		    input: {
		        coeffs: [-2.69781010140705e-10, 6.87353042524159e-7, -0.000787763614338392, 0.772024373376395, -258.129243733077]
		    },
		    output: {
		        coeffs: [1e-14, 0, 1.4025e-8, 0, 0.003325, 2.7405, 500]
		    }
		},
		"ntc": {
		    input: {
		        A: 4.04857270920925e-7,
		        B: -764233176888723e-20,
		        C: 0.000393472251690426,
		        D: 0.000452402472520038
		    },
		    output: {
		        A: 4.04857270920925e-7,
		        B: -764233176888723e-20,
		        C: 0.000393472251690426,
		        D: 0.000452402472520038
		    }
		},
		"ntc-ta_1800at25": {
		    input: {
		        A: 1.07620446367734e-7,
		        B: 167903532216086e-20,
		        C: 0.000256530370546475,
		        D: 0.00129153143810628
		    },
		    output: {
		        A: 1.07620446367734e-7,
		        B: 167903532216086e-20,
		        C: 0.000256530370546475,
		        D: 0.00129153143810628
		    }
		},
		"ntc_21c_1800at25": {
		    input: {
		        A: 1.58769970779388e-7,
		        B: -1.93573900975383e-7,
		        C: 0.000268080203459521,
		        D: 0.00128860518811899
		    },
		    output: {
		        A: 1.58769970779388e-7,
		        B: -1.93573900975383e-7,
		        C: 0.000268080203459521,
		        D: 0.00128860518811899
		    }
		},
		"ntc_21c_5000at25": {
		    input: {
		        A: 9.12014282033e-8,
		        B: 1.15500783973e-7,
		        C: 0.000234620189597,
		        D: 0.00129093812752
		    },
		    output: {
		        A: 9.12014282033e-8,
		        B: 1.15500783973e-7,
		        C: 0.000234620189597,
		        D: 0.00129093812752
		    }
		},
		"ntc_egu": {
		    input: {
		        A: 1.53163424499187e-7,
		        B: -377760774051592e-20,
		        C: 0.000324494183760425,
		        D: 0.00106959257451671
		    },
		    output: {
		        A: 1.53163424499187e-7,
		        B: -377760774051592e-20,
		        C: 0.000324494183760425,
		        D: 0.00106959257451671
		    }
		},
		"ntc_regin": {
		    input: {
		        coeffs: [-83.3266129032258, 12500]
		    },
		    output: {
		        coeffs: [-0.0120009291791283, 150.011614739104]
		    }
		},
		"pt1000_american": {
		    input: {
		        A: 0.0039692,
		        B: -5.8495e-7,
		        C: -4.2325e-12,
		        R0: 1e3
		    },
		    output: {
		        A: 0.0039692,
		        B: -5.8495e-7,
		        C: -4.2325e-12,
		        R0: 1e3
		    }
		},
		"pt1000_din": {
		    input: {
		        A: 0.003908,
		        B: -5.8019e-7,
		        C: -4.2735e-12,
		        R0: 1e3
		    },
		    output: {
		        A: 0.003908,
		        B: -5.8019e-7,
		        C: -4.2735e-12,
		        R0: 1e3
		    }
		},
		"pt1000_iec": {
		    input: {
		        A: 0.0039083,
		        B: -5.775e-7,
		        C: -4.183e-12,
		        R0: 1e3
		    },
		    output: {
		        A: 0.0039083,
		        B: -5.775e-7,
		        C: -4.183e-12,
		        R0: 1e3
		    }
		},
		"pt1000_its": {
		    input: {
		        A: 0.0039848,
		        B: -5.87e-7,
		        C: -4e-12,
		        R0: 1e3
		    },
		    output: {
		        A: 0.0039848,
		        B: -5.87e-7,
		        C: -4e-12,
		        R0: 1e3
		    }
		},
		"pt100_american": {
		    input: {
		        A: 0.0039692,
		        B: -5.8495e-7,
		        C: -4.2325e-12,
		        R0: 100
		    },
		    output: {
		        A: 0.0039692,
		        B: -5.8495e-7,
		        C: -4.2325e-12,
		        R0: 100
		    }
		},
		"pt100_din": {
		    input: {
		        A: 0.003908,
		        B: -5.8019e-7,
		        C: -4.2735e-12,
		        R0: 100
		    },
		    output: {
		        A: 0.003908,
		        B: -5.8019e-7,
		        C: -4.2735e-12,
		        R0: 100
		    }
		},
		"pt100_iec": {
		    input: {
		        A: 0.0039083,
		        B: -5.775e-7,
		        C: -4.183e-12,
		        R0: 100
		    },
		    output: {
		        A: 0.0039083,
		        B: -5.775e-7,
		        C: -4.183e-12,
		        R0: 100
		    }
		},
		"pt100_its": {
		    input: {
		        A: 0.0039848,
		        B: -5.87e-7,
		        C: -4e-12,
		        R0: 100
		    },
		    output: {
		        A: 0.0039848,
		        B: -5.87e-7,
		        C: -4e-12,
		        R0: 100
		    }
		},
		"t1_ptc": {
		    input: {
		        coeffs: [6.74640143525128e-10, -128122227474942e-19, 0.147359487181807, -271.973916255741]
		    },
		    output: {
		        coeffs: [684678440147813e-20, 0.00822104962592024, 9.96524485096916, 2225.95967133728]
		    }
		},
		"teu_ntc10": {
		    input: {
		        A: 9.8474332708816e-8,
		        B: -3.51434556637709e-7,
		        C: 0.00023778401087475,
		        D: 0.00111689479965615
		    },
		    output: {
		        A: 9.8474332708816e-8,
		        B: -3.51434556637709e-7,
		        C: 0.00023778401087475,
		        D: 0.00111689479965615
		    }
		},
		"teu_ntc10an": {
		    input: {
		        A: 1.60876914547585e-7,
		        B: -1.3956134091135e-7,
		        C: 0.000240622046818478,
		        D: 0.00102395636568477
		    },
		    output: {
		        A: 1.60876914547585e-7,
		        B: -1.3956134091135e-7,
		        C: 0.000240622046818478,
		        D: 0.00102395636568477
		    }
		},
		"ntc_t7043b": {
		    input: {
		        A: -1.01524819e-08,
		        B: 9.92383335e-04,
		        C: -1.07418789e-04,
		        D: 5.25892000e-06
		    },
		    output: {
		        A: -1.01524819e-08,
		        B: 9.92383335e-04,
		        C: -1.07418789e-04,
		        D: 5.25892000e-06
		    }
		},
		"10k3a1": {
		    input: {
		        A: 9.59044486387e-08,
		        B: -2.26588617544e-07,
		        C: 0.000236184761812,
		        D: 0.00112300802268
		    },
		    output: {
		        A: 9.59044486387e-08,
		        B: -2.26588617544e-07,
		        C: 0.000236184761812,
		        D: 0.00112300802268
		    }
		},
		"ntc_af40": {
		    input: {
		        A: -4.57801259842e-05,
		        B: 0.00135993567511,
		        C: -0.0142462410404,
		        D: 0.0531742435741
		    },
		    output: {
		        A: -4.57801259842e-05,
		        B: 0.00135993567511,
		        C: -0.0142462410404,
		        D: 0.0531742435741
		    }
		},
		"ptc_5224": {
			input: {
				coeffs: [-2.7171993995405402e-12, 3.0584537351904265e-08, -0.00011683776163591668, 0.28033750451038214, -167.60582814069903]
			},
			output: {
				coeffs: [-6.39908892e-08, 3.42550568e-05, 1.75592495e-02, 6.94945523e+00, 8.24542178e+02]
			}
		},
		"transp": {
		    input: {
		        coeffs: [1, 0]
		    },
		    output: {
				coeffs: [1, 0]
			}
		}
	};
};


RTD.prototype.sensors = function() {
    var s = Object.keys(this.SENSOR_LIST);
    s.sort();
	return s;
};

RTD.prototype.getSensor = function(name) {
    return this.SENSOR_LIST[name];
};

RTD.prototype.polynom = function(coeffs, val) {
    var retval = 0.0;
    
    if(coeffs == null) {
      return 0;
    }
    
    for(var i = 0; i < coeffs.length; i++) {
      var coeff = coeffs[i];
      retval = retval * val + coeff;
    }

    return retval;
};

RTD.prototype.cvd_r2t = function(R0, A, B, C, val) {
    // return temperature for resistance 'val'
    return (-R0 * A + Math.pow(Math.pow(R0, 2) * Math.pow(A, 2) - 4 * R0 * B * (R0 - val), 0.5)) / (2 * R0 * B);
};

RTD.prototype.cvd_t2r = function(R0, A, B, C, val) {
    // return resistance for temperature 'val'
    return R0 * (1 + A * val + B * Math.pow(val, 2));
};
  
RTD.prototype.sh_r2t = function(A, B, C, D, val) {
    var log_r = Math.log(val);
    return 1.0 / (
      A * Math.pow(log_r, 3) +
      B * Math.pow(log_r, 2) +
      C * log_r +
      D) + this.ABS_ZERO;
};

RTD.prototype.sh_t2r = function(A, B, C, D, val) {
    var t, z, y, x1, x2;
    
    t = 1.0 / (val - this.ABS_ZERO);

    z = Math.pow(-B, 3) / (27 * Math.pow(A, 3));
    z += (B * C) / (6 * Math.pow(A, 2));
    z -= (D - t) / (2 * A);

    y = C / (3 * A);
    y -= Math.pow(B, 2) / (9 * Math.pow(A, 2));
    y = Math.pow(z, 2) + Math.pow(y, 3);
    y = Math.pow(y, 1 / 2.0);

    x1 = Math.pow(z + y, 1/3.0);
    x2 = (y > z) ? -1 * Math.pow(-1 * (z - y), 1 / 3.0) : Math.pow(z - y, 1 / 3.0);

    return Math.exp(x1 + x2 - B / (3 * A));
};

RTD.prototype.r2t = function(obj, val) {
    var coeffs = null,
        r0 = -Infinity,
        a = -Infinity,
        b = -Infinity,
        c = -Infinity,
        d = -Infinity,
        out_temperature = -Infinity;

    if(typeof obj == "string") {
		obj = this.getSensor(obj);
	}

	if(obj != null && obj.hasOwnProperty("input") && obj.input != null) {
		obj = obj.input;

		if(obj != null && obj.hasOwnProperty("coeffs")) {
		    out_temperature = this.polynom(obj.coeffs, val);
		}
		else if(obj != null && obj.hasOwnProperty("R0")) {
		    out_temperature = this.cvd_r2t(obj.R0, obj.A, obj.B, obj.C, val);
		}
		else if(obj != null && obj.hasOwnProperty("D")) {
		    out_temperature = this.sh_r2t(obj.A, obj.B, obj.C, obj.D, val);
		}
		else if(obj != null && obj.hasOwnProperty("P1")) {
		  /* Implement linear here */
		}
	}
    
    return out_temperature;
};

RTD.prototype.t2r = function(obj, val) {
    var coeffs = null,
        r0 = -Infinity,
        a = -Infinity,
        b = -Infinity,
        c = -Infinity,
        d = -Infinity,
        out_resistance = -Infinity;

    if(typeof obj == "string") {
		obj = this.getSensor(obj);
	}

	if(obj != null && obj.hasOwnProperty("output") && obj.output != null) {
		obj = obj.output;

		if(obj.hasOwnProperty("coeffs")) {
		    out_resistance = this.polynom(obj.coeffs, val);
		}
		else if(obj.hasOwnProperty("R0")) {
		    out_resistance = this.cvd_t2r(obj.R0, obj.A, obj.B, obj.C, val);
		}
		else if(obj.hasOwnProperty("D")) {
		    out_resistance = this.sh_t2r(obj.A, obj.B, obj.C, obj.D, val);
		}
		else if(obj.hasOwnProperty("P1")) {
		  /* Implement linear here */
		}
	}

    return out_resistance;
};

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
    define(factory);
  } else if (typeof exports === 'object') {
      // CommonJS
    module.exports = factory();
  } else {
    // Browser globals (Note: root is window)
    root.RTD = factory();
  }
}(this, function () {
  // Exposed public methods
  return RTD;
}));
