import React from 'react'

const PPTClass = () => {
  return (
    <>
    <div className="PPT-class common">
        <h1>PPT Class</h1>
        <form className='PPT-class-form common-form'>
            <div className="session">
            <label htmlFor="Session">Sessions<sup>*</sup></label>
            <select name="session" required>
			                <option value="">Select Session</option>
                            <option value="2014-15">2014-15</option>
							<option value="2015-16">2015-16</option>
							<option value="2016-17">2016-17</option>
							<option value="2017-18">2017-18</option>
							<option value="2018-19">2018-19</option>
							<option value="2019-20">2019-20</option>
							<option value="2020-21">2020-21</option>
							<option value="2021-22">2021-22</option>
							<option value="2022-23">2022-23</option>
							<option value="2023-24">2023-24</option>
							<option value="2024-25">2024-25</option>
							<option value="2025-26">2025-26</option>
							<option value="2026-27">2026-27</option>
							<option value="2027-28">2027-28</option>
							<option value="2028-29">2028-29</option>
							<option value="2029-30">2029-30</option>
							<option value="2030-31">2030-31</option>
							<option value="2031-32">2031-32</option>
							<option value="2032-33">2032-33</option>
							<option value="2033-34">2033-34</option>
							<option value="2034-35">2034-35</option>
							<option value="2035-36">2035-36</option>
							<option value="2036-37">2036-37</option>
							<option value="2037-38">2037-38</option>
							<option value="2038-39">2038-39</option>
							<option value="2039-40">2039-40</option>
							<option value="2040-41">2040-41</option>
							<option value="2041-42">2041-42</option>
							<option value="2042-43">2042-43</option>
							<option value="2043-44">2043-44</option>
							<option value="2044-45">2044-45</option>
							<option value="2045-46">2045-46</option>
							<option value="2046-47">2046-47</option>
							<option value="2047-48">2047-48</option>
							<option value="2048-49">2048-49</option>
							<option value="2049-50">2049-50</option>			
			</select>
            </div>
                <div className="semester">
                <label htmlFor="Semester">Semester<sup>*</sup></label>
                <select name="semester" required="">
			        <option >Select Semester</option>
					<option value="1">1st Sem</option>
					<option value="2">2nd Sem</option>
					<option value="3">3rd Sem</option>
					<option value="4">4th Sem</option>
					<option value="5">5th Sem</option>
					<option value="6">6th Sem</option>
				</select>
                </div>
                <div className="course-type">
                    <label htmlFor="Course Type">Course Type<sup>*</sup></label>
                <select name="course" required="">
                    <option defaultValue='Select Course Type'>Select Course Type</option>
                    <option value="General">General</option>
                    <option value="Honours">Honours</option>
                    <option value="PG">PG</option>
                    <option value="Add On course">Add On course</option>
                    <option value="Yoga materials">Yoga materials</option>
                </select>
                </div>
				<button className='form-submit'>Submit</button>
        </form>        
    </div>
    </>
  )
}

export default PPTClass