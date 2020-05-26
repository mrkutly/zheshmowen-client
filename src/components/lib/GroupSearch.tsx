import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { useLazyQuery } from '@apollo/client';
import AsyncSelect from 'react-select/async';
import { SEARCH_GROUPS_QUERY, SearchGroupsData } from '../../apollo/query';

const Group = () => {
	const [searchGroups, { data }] = useLazyQuery<SearchGroupsData>(SEARCH_GROUPS_QUERY);
	const [target, setTarget] = useState(null);

	const handleGroupSelect = (values, { action }) => {
		if (action === 'clear' || values === null) {
			return;
		}

		const { value } = values;
		navigate(`/groups/${value}`);
	};

	useEffect(() => {
		setTarget(document.body);
	}, [setTarget]);

	const loadOptions = async (inputVal: string) => {
		searchGroups({ variables: { name: inputVal } });

		const formatted = data?.groupsWhere.map(group => ({
			label: group.name,
			value: group.slug
		}));

		return formatted ?? [];
	};

	return (
		<div style={{ minWidth: '500px' }}>
			<AsyncSelect
				cacheOptions={true}
				isClearable={true}
				loadOptions={loadOptions}
				menuPortalTarget={target}
				name="meetingName"
				onChange={handleGroupSelect}
				placeholder="Search for a language group"
				type="text"
			/>
		</div>
	);
};

export default Group;
