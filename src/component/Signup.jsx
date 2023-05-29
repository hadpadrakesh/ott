const Signup = () => {
    return ( 
        <div>
            <h1>Create New Account</h1>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="date" placeholder="DOB"/>

            <fieldset>
                <legend>Gender</legend>
                <input type="text" name="gender" value="Male" id="M"/><label htmlFor="M" >Male</label>
                <input type="text" name="gender" value="Female" id="F"/><label htmlFor="M" >Female</label>
                <input type="text" name="gender" value="Other" id="O"/><label htmlFor="M" >Other</label>
            </fieldset>

            <fieldset>
                <legend>Country</legend>
                <select id="country">
                    <option value="null"> Select</option>
                    <option value="India">India</option>
                    <option value="Nepal">Nepal</option>
                    <option value="USA">USA</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Japan">Japan</option>
                    <option value="Russia">Russia</option>
                </select>
            </fieldset>

            <button type="submit">Signup</button>


        </div>
     );
}
 
export default Signup;