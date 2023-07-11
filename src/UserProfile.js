import React from 'react';


const UserProfile = (props) => {
  const { name, age, location, bio } = props;

  return (
    <div>
      {/* <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Bio: {bio}</p> */}

{/* <div class="container">
    <h1>Edit Profile</h1>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" value="John Doe"/>
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input type="number" class="form-control" id="age" value="30"/>
      </div>
      <div class="mb-3">
        <label for="location" class="form-label">Location</label>
        <input type="text" class="form-control" id="location" value="New York"/>
      </div>
      <div class="mb-3">
        <label for="bio" class="form-label">Bio</label>
        <textarea class="form-control" id="bio" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div> */}
{/* 
<div class="container">
    <div class="card mt-5">
      <div class="card-body">
        <h1 class="card-title">User Profile</h1>
        <div class="row">
          <div class="col-md-4">
            <img src="" alt="Profile Image" class="img-fluid"/>
          </div>
          <div class="col-md-8">
            <p class="card-text">Name:Manful Sinh</p>
            <p class="card-text">Age: 21</p>
            <p class="card-text">Location:Idar</p>
            <p class="card-text">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
      <div class="container mt-5">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center">
                    <img src="./7.jpeg" width="100" class="rounded-circle"/>
                    
                    
                </div>
                
                <div class="text-center mt-3">
                    {/* <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span> */}
                    <h5 class="mt-2 mb-0">Manful singh</h5>
                    <span>Web Designer</span>
                    
                    <div class="px-4 mt-1">
                        <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    </div>
                    
                     <ul class="social-list">
                     <li><i class="fa-brands fa-facebook"></i></li>
                     <li><i class="fa-brands fa-google"></i></li>
                       <li><i class="fa-brands fa-instagram"></i></li>
                       <li><i class="fa-brands fa-linkedin"></i></li>
                       <li><i class="fa-brands fa-google"></i></li>
                    </ul>
                    
                    <div class="buttons">
                        
                        <button class="btn btn-outline-primary px-4">Message</button>
                        <button class="btn btn-primary px-4 ms-3">Contact</button>
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    
</div>
    </div>
  );
};

export default UserProfile;
