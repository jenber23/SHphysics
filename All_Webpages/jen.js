
        function equationOne()
        {
            //only function that needs to be called, rest do it "automatically"
            function assignVars() {
                var y = document.getElementById("displacement").value;
                var vi = document.getElementById("velocity").value;
                var a = document.getElementById("acceleration").value;
                var t = document.getElementById("time").value;

                document.getElementById("yVal").innerHTML = y;
                document.getElementById("viVal").innerHTML = vi;
                document.getElementById("aVal").innerHTML = a;
                document.getElementById("tVal").innerHTML = t;

                checkInputs(y, vi, a, t);
            }
            function checkInputs(y, vi, a, t) {
                //var answer = document.getElementById("ans").value ;
                var answer;
                if (y == "") {
                    answer = vi * t + 0.5 * a * t * t;
                }
                else if (a == "") {
                    answer = 2 * (y - v * t);
                    answer /= (t * t);
                }
                else if (vi == "") {
                    answer = (y - 0.5 * a * t * t) / t;
                }
                else if (t == "") {
                    //solving positive
                    var t1 = ((-1.0)*vi + Math.sqrt(vi*vi + 2*a*y)) /a;
                    var t2 = ((-1.0)*vi - Math.sqrt(vi*vi + 2*a*y)) /a;
                    if (t1 > 0) {
                        if (t2 > 0) {
                            if (t1 < t2)
                                answer = t1;
                            else
                                answer = t2;
                        }
                        else
                            answer = t1
                    }
                    else
                        answer = t2;           
                }
                else {
                    //document.write("Please fill in 3 fields.");
                }
                document.getElementById("ans").innerHTML = answer;
            }
            return assignVars();
        }
        function equationTwo()
        {
            //only function that needs to be called, rest do it "automatically"
            function assignVars() {
                var vf = document.getElementById("finalVelocity").value;
                var vi = document.getElementById("initialVelocity").value;
                var a = document.getElementById("acceleration").value;
                var t = document.getElementById("time").value;

                document.getElementById("vfVal").innerHTML = vf;
                document.getElementById("viVal").innerHTML = vi;
                document.getElementById("aVal").innerHTML = a;
                document.getElementById("tVal").innerHTML = t;

                checkInputs(vf, vi, a, t);
            }
            function checkInputs(vf, vi, a, t) {
                var answer;
                if (vf == "") {
                    answer = vi + a * t;
                }
                else if (vi == "") {
                    answer = vf - a * t;
                }
                else if (a == "") {
                    answer = (1.0/t) * (vf-vi);
                }
                else if (t == "") {
                    answer = (1.0/a) * (vf-vi);        
                }
                else {
                    //document.write("Please fill in 3 fields.");
                }
                document.getElementById("ans").innerHTML = answer;
            }
            return assignVars();
        }
        function equationThree()
        {
            //only function that needs to be called, rest do it "automatically"
            function assignVars() {
                var y = document.getElementById("displacement").value;
                var vf = document.getElementById("finalVelocity").value;
                var vi = document.getElementById("initialVelocity").value;
                var t = document.getElementById("time").value;

                document.getElementById("yVal").innerHTML = y;
                document.getElementById("vfVal").innerHTML = vf;
                document.getElementById("viVal").innerHTML = vi;
                document.getElementById("tVal").innerHTML = t;

                checkInputs(y, vf, vi, t);
            }
            function checkInputs(y, vf, vi, t) {
                var answer;
                if (y == "") {
                    answer = 0.5 * t * (vf + vi);
                }
                else if (vf == "") {
                    answer = (2.0/t) * y - vi;
                }
                else if (vi == "") {
                    answer = (2.0/t) * y - v;
                }
                else if (t == "") {
                    answer = (2.0*y) / (vf-vi);        
                }
                else {
                    //document.write("Please fill in 3 fields.");
                }
                document.getElementById("ans").innerHTML = answer;
            }
            return assignVars();
        }
        function equationFour()
        {
            //only function that needs to be called, rest do it "automatically"
            function assignVars() {
                var y = document.getElementById("displacement").value;
                var vf = document.getElementById("finalVelocity").value;
                var vi = document.getElementById("initialVelocity").value;
                var a = document.getElementById("acceleration").value;

                document.getElementById("yVal").innerHTML = y;
                document.getElementById("vfVal").innerHTML = vf;
                document.getElementById("viVal").innerHTML = vi;
                document.getElementById("aVal").innerHTML = a;

                checkInputs(y,vf,vi,a);
            }
            function checkInputs(y,vf,vi,a) {
                var answer;
                if (y == "") {
                    answer = (vf*vf - vi*vi)/(2.0 * a);
                }
                else if (vf == "") {
                    answer = Math.sqrt(vi*vi + 2*a*y);
                }
                else if (vi == "") {
                    answer = Math.sqrt(vf*vf - 2*a*y);
                }
                else if (a == "") {
                    answer = (vf*vf - vi*vi)/(2.0 * y);        
                }
                else {
                    //document.write("Please fill in 3 fields.");
                }
                document.getElementById("ans").innerHTML = answer;
            }
            return assignVars();
        }
    