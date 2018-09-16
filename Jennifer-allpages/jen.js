
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
                var vf2 = document.getElementById("finalV2").value;
                var vi2 = document.getElementById("initialV2").value;
                var a2 = document.getElementById("acc2").value;
                var t2 = document.getElementById("time2").value;

                document.getElementById("vfVal2").innerHTML = vf2;
                document.getElementById("viVal2").innerHTML = vi2;
                document.getElementById("aVal2").innerHTML = a2;
                document.getElementById("tVa2").innerHTML = t2;

                checkInputs(vf2, vi2, a2, t2);
            }
            function checkInputs(vf2, vi2, a2, t2) {
                var ans2;
                if (vf2 == "") {
                    ans2 = vi2 + a2 * t2;
                }
                else if (vi2 == "") {
                    ans2 = vf2 - a2 * t2;
                }
                else if (a2 == "") {
                    ans2 = (1.0/t2) * (vf2-vi2);
                }
                else if (t2 == "") {
                    ans2 = (1.0/a2) * (vf2-vi2);        
                }
                else {
                    //document.write("Please fill in 3 fields.");
                }
                document.getElementById("answer2").innerHTML = ans2;
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
    