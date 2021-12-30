# OpenCred

## A permissionless Review Protocol focused around tech bootcamps

OpenCred is a permissionless review protocol that allow's bootcamps to graduate students by providing them certificates through merkle proof. Graduates of various courses from a bootcamp/educational institutions can review the institution they graduated from in a permissionless way.

## Metadata standard

Adding rich metadata to your URI's

<details>
	<summary>
	Bootcamp 
	</summary>

```json
{
  "name": "",
  "about": "",
  "location": ""
}
```

</details>
<details>
	<summary>
	Course
	</summary>

```json
{
  "name": "",
  "cost": "",
  "duration": "",
  "location": "",
  "description": "",
  "subjects": ""
}
```

</details>
<details>
	<summary>
	Graduation
	</summary>

```json
{
  "date": "",
  "graduates": [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
	.
	.
	.
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
  ],
}

```

</details>

<details>
	<summary>
	Review
	</summary>

```json
{
  "reviewer": "",
  "email": "",
  "title": "",
  "body": "",
  "rating": "",
  "batch": "",
  "courseId": ""
}
```

</details>
