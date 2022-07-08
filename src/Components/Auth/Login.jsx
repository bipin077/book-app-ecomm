import React from "react";

function Login()
{
    return (

        <>
        <div class="container m-5 row">
        <div className="col-sm-5">
            <h4 className="text-center mb-3">Login | Book Store</h4>
            
                <div class="form-group">
                    <label class="control-label mt-2" for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div class="form-group">
                    <label class="control-label mt-2" for="pwd">Password:</label>        
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                </div>

                <div class="form-group mt-3">        
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </div>

            <div className="col-sm-6 align-right offset-1">
            <h4 className="text-center mb-3">Register | Book Store</h4>
                <div className="row">
                    <div className="col-sm-5">
                        <div class="form-group">
                            <label class="control-label mt-2" for="email">Your Name</label>
                            <input type="text" class="form-control" placeholder="Enter email" name="email" />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div class="form-group">
                            <label class="control-label mt-2" for="email">Email:</label>
                            <input type="email" class="form-control" placeholder="Enter email" name="email" />
                        </div>
                    </div>
                </div>                
                <div class="form-group">
                    <label class="control-label mt-2" for="email">Address:</label>
                    <input type="text" class="form-control" placeholder="Enter email" name="email" />
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label class="control-label mt-2" for="pwd">Password:</label>        
                            <input type="password" class="form-control" placeholder="Enter password" name="pwd" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label class="control-label mt-2" for="pwd">Confirm Password:</label>        
                            <input type="password" class="form-control" placeholder="Enter Confirm password" name="pwd" />
                        </div>
                    </div>
                </div>
                
                

                <div class="form-group mt-3">        
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
        </>

    )
}

export default Login;