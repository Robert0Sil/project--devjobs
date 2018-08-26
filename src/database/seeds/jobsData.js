
exports.seed = function(knex, Promise) {

  const jobDataRows = [
  {
    com_id: Math.floor(Math.random()*4)+1,
    name: 'Database Administrator - MySQL',
    description: 'Key players will take ownership of their bandwidths by conservatively right-sizing best-of-breed standpoints.',
    location: 'Ciudad de Mexico',
    salary: 27000,
    full_time: true
  },
  {
    com_id: Math.floor(Math.random()*4)+1,
    name: 'UX Architect',
    description: 'Development lifecycle enables knowledge transfer, innovative drivers. Going forward, our unparalleled market focus will deliver value to vertical.',
    location: 'Monterrey',
    salary: 35000,
    full_time: true
  },
  {
    com_id: Math.floor(Math.random()*4)+1,
    name: 'Junior Front End Engineer',
    description: 'Actionable propositions are becoming competitive organic growth experts.',
    location: 'Monterrey',
    salary: 9000,
    full_time: false
  },
  {
    name: 'Mid-Level Front End Engineer',
    description: 'Intelligently engineer your emerging markets to increase your organic growth velocity.',
    location: 'Ciudad de Mexico',
    salary: 23000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Mid-Level Java Engineer',
    description: ' Key players will take ownership of their step-changes by reliably deep-diving immersive verticals.',
    location: 'Ciudad de Mexico',
    salary: 28000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Database Admin - Mongoose',
    description: 'In the visibility space, industry is globally reusing its best-in-class user experiences. Change the way you do business - adopt next-generation big datas.',
    location: 'Ciudad de Mexico',
    salary: 24000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'IOS Developer - Senior',
    description: 'Wholesale dot-bomb will deliver value to game changers. Change the way you do business - adopt next-generation milestones.',
    location: 'Ciudad de Mexico',
    salary: 43000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Scala Developer : Mid Level',
    description: 'We use our world-class enterprises to strategically manage our standpoint expectations.',
    location: 'Guadalajara',
    salary: 23000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Wordpress Developer',
    description: 'We use our world-class enterprises to strategically manage our standpoint expectations.',
    location: 'Guadalajara',
    salary: 16000,
    full_time: false,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Senior Applications Architect',
    description: 'Ethically right-size your innovations to increase your market focus velocity. Going forward, our proactive paradigm shift will deliver value to core competencies.',
    location: 'Monterrey',
    salary: 56000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Senior Applications Architect',
    description: 'Ethically right-size your innovations to increase your market focus velocity. Going forward, our proactive paradigm shift will deliver value to core competencies.',
    location: 'Monterrey',
    salary: 56000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Python Developer',
    description: 'seeking a Python Developer for a full-time direct hire opportunity. The Python Developer is someone who is proactive, driven and eager to help build a digital workspace to be used by researchers at Life Sciences companies.',
    location: 'Ciudad de Mexico',
    salary: 36000,
    full_time: true,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Magento Developer',
    description: 'esponsible for customizing enterprise-grade software platforms such as Magento and the Salesforce Commerce Cloud.',
    location: 'Monterrey',
    salary: 25000,
    full_time: false,
    com_id: Math.floor(Math.random()*4)+1
  },
  {
    name: 'Magento Developer',
    description: 'esponsible for customizing enterprise-grade software platforms such as Magento and the Salesforce Commerce Cloud.',
    location: 'Monterrey',
    salary: 25000,
    full_time: false,
    com_id: Math.floor(Math.random()*4)+1
  }
]
//Math.floor(Math.random()*4)+1
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert(
      jobDataRows
    );
    });
};
