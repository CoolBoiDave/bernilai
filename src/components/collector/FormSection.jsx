import { Form, useNavigate, useSearchParams } from "react-router";
import styles from "../../pages/Collector.module.css";

function FormSection() {
	const [searchParams, setSearchParams] = useSearchParams();
	const panti = searchParams.get("panti");
	const navigate = useNavigate();

	function submitHandler(e) {
		e.preventDefault();
		navigate("2");
	}

	return (
		<section className='form__section'>
			<h2 className='collector__title'>
				<i className='fa-regular fa-user'></i> FILL IN THE FORM
			</h2>
			<Form className='form' onSubmit={submitHandler}>
				<div className='form__group'>
					<label className='form__label'>Full Name</label>
					<input
						type='text'
						className='form__input'
						name='name'
						id='name'
						required
					/>
				</div>

				<div className='form__group'>
					<label className='form__label'>Email</label>
					<input
						type='email'
						className='form__input'
						name='email'
						id='email'
						required
					/>
				</div>

				<div className='form__twoinone'>
					<div className='form__group'>
						<label className='form__label'>
							Contact Number (WA)
						</label>
						<input
							type='number'
							className='form__input'
							name='phone'
							id='phone'
							required
						/>
					</div>

					<div className='form__group'>
						<label className='form__label'>Address</label>
						<input
							type='text'
							className='form__input'
							name='address'
							id='address'
							required
						/>
					</div>
				</div>

				<div className='form__group'>
					<label className='form__label'>Pick your orphanage!</label>
					<input
						type='text'
						className='form__input'
						name='name'
						id='name'
						disabled
						defaultValue={panti}
						required
					/>

					{!panti && (
						<p className='form__clarify'>
							To choose an orphanage, please go to the Discover
							page first.
						</p>
					)}
				</div>

				<div className='form__group'>
					<label className='form__label'>Item List</label>
					<textarea
						className='form__textarea'
						name='list'
						id='list'
						required
					/>
				</div>

				<button
					type='submit'
					className='btn'
					disabled={panti ? false : true}
				>
					Next
				</button>
			</Form>
		</section>
	);
}

export default FormSection;
